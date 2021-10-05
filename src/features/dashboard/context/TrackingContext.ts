import { createContext } from "react";
import { ITrackingState } from "./TrackingProvaider";
export type TimeFrameType = 
    | 'daily' 
    | 'weekly' 
    | 'monthly';

export type TrackingContextProps = {
    trackingState: ITrackingState;
    changeTimeFrame: ( type: TimeFrameType ) => void;
} 


export const TrackingContext = createContext<TrackingContextProps>({} as TrackingContextProps );