import { ICenterPoint, IItemContainerInfo } from './centerPoint.types';

export const handleItemsCPChangeWithIndex = (
    itemCenterPoints: (ICenterPoint | undefined)[], 
    itemContainerInfo: IItemContainerInfo
    ): (ICenterPoint | undefined)[] => 
    {
        const newItemCenterPointsArray = [...itemCenterPoints];
        const { centerPoint, index } = itemContainerInfo;
        if(index) {
            newItemCenterPointsArray[index] = centerPoint;
        } else if(index === 0) {
            newItemCenterPointsArray[index] = centerPoint;
        }

        return newItemCenterPointsArray;
}