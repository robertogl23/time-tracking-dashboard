import { ISelectedValues } from "../../data/dto/tracking.dto";
import { ITrackingState } from "./TrackingProvaider";

export type TrackingAction = | { type: 'changeTimeFrame', payload: ISelectedValues };


export const trackingReducer = ( state: ITrackingState, action: TrackingAction ): ITrackingState => {

    switch ( action.type ) {
        case 'changeTimeFrame':
            return {
                ...state,
                selectedValues : action.payload
            }
        default:
            return state;
    }

}