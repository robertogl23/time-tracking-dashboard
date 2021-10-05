export interface TrackingDao {
    title : string,
    timeframes:ITimeFrames
}

interface ITimeFrames {
    daily :IValues;
    weekly :IValues;
    monthly :IValues;
}
export interface ITimeFramesSelected {
    daily :IValues;
    weekly :IValues;
    monthly :IValues;
}

export interface IValues {
    current : number;
    previous : number;
}

export interface ISelectedValues {
    play : IValues
    social : IValues
    work : IValues
    study : IValues
    exercise : IValues
    selfCare  : IValues
}