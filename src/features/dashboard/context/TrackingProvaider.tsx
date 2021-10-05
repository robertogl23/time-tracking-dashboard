import { ISelectedValues, TrackingDao } from "../../data/dto/tracking.dto";
import dataJson from '../../data/data.json'
import { useReducer } from "react";
import { trackingReducer } from "./TrackingReducer";
import { TimeFrameType, TrackingContext } from "./TrackingContext";

export interface ITrackingState {
    valuesList     : TrackingDao[]
    selectedValues : ISelectedValues
}

const data : TrackingDao[] = dataJson;

export const INITIAL_STATE: ITrackingState = {
    valuesList : data,
    selectedValues : {
        work     : data[0].timeframes.monthly,
        play     : data[1].timeframes.monthly,
        study    : data[2].timeframes.monthly,
        exercise : data[3].timeframes.monthly,
        social   : data[4].timeframes.monthly,
        selfCare : data[5].timeframes.monthly,
    }

}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TrackingProvider = ({ children }: props ) => {

    const [ trackingState, dispatch] = useReducer( trackingReducer, INITIAL_STATE );
    const changeTimeFrame = (type : TimeFrameType) => {
        const newValues = {
            work     : trackingState.valuesList[0].timeframes[type],
            play     : trackingState.valuesList[1].timeframes[type],
            study    : trackingState.valuesList[2].timeframes[type],
            exercise : trackingState.valuesList[3].timeframes[type],
            social   : trackingState.valuesList[4].timeframes[type],
            selfCare : trackingState.valuesList[5].timeframes[type],
        }    
        dispatch({
            type:'changeTimeFrame',
            payload: newValues
        })
    }

    return (
        <TrackingContext.Provider value={{
            trackingState,
            changeTimeFrame
        }}>
            { children }
        </TrackingContext.Provider>
    )
}
