import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        verticalList: [],
    }),

    actions: {
        generateVerticalList() {
            this.verticalList = [];
            for (let i = 0; i < Math.floor(Math.random() * 20) + 10; i++) {
                const horizontalList = [];
                for (let j = 0; j < Math.floor(Math.random() * 30) + 10; j++) {
                    horizontalList.push(Math.floor(Math.random() * 100));
                }
                this.verticalList.push(horizontalList);
            }
        },
        determineVisibleElements({ top, bottom, left, right }) {
            const visibleElements = [];

            this.verticalList.forEach((horizontalList, index) => {
                const horizontalListElement = document.getElementById(`horizontal-list-${index}`);

                if (!horizontalListElement) return;

                const elementTop = horizontalListElement.offsetTop;
                const elementBottom = elementTop + horizontalListElement.offsetHeight;
                const elementLeft = horizontalListElement.offsetLeft;
                const elementRight = elementLeft + horizontalListElement.offsetWidth;

                if (elementBottom >= top && elementTop <= bottom &&
                    elementRight >= left && elementLeft <= right) {
                    const visibleItems = [];
                    for (let i = 0; i < horizontalList.length; i++) {
                        const itemElement = horizontalListElement.children[i];
                        const itemLeft = itemElement.offsetLeft;
                        const itemRight = itemLeft + itemElement.offsetWidth;

                        if (itemRight >= left && itemLeft <= right) {
                            visibleItems.push(i);
                        }
                    }

                    if (visibleItems.length > 0) {
                        visibleElements.push({ index, visibleItems });
                    }
                }
            });

            return visibleElements;
        },
        updateVisibleElements(visibleElements) {
            visibleElements.forEach(({ index, visibleItems }) => {
                const horizontalList = this.verticalList[index];

                const randomIndex = Math.floor(Math.random() * visibleItems.length);
                const randomVisibleItemIndex = visibleItems[randomIndex];

                horizontalList[randomVisibleItemIndex] = Math.floor(Math.random() * 100);
            });

        }
    },
});
