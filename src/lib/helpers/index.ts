export interface EventData {
    root: string
    quality: ChordQuality
    duration: number
    beatStrength: 'Weak' | 'Moderate' | 'Strong'
}

export enum ChordQuality {
    Major,
    Minor,
    Diminished,
    Augmented,
    MajMaj7,
    MajMin7,
    MinMin7,
    MinMaj7,
    HalfDim7,
    FullDim7,
    DinMaj7,
    AugMaj7
}