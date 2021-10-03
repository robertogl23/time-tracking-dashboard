import { CardType } from "../components/Card";
interface CardProps  {
    bgColor : string;
    image   : string;
}

export const GetCardProps = (type : CardType) : CardProps => {
    switch (type) {
        case 'play':
            return {
                bgColor:'bgColorplay',
                image:type
            }
        case 'social':
            return {
                bgColor:'bgColorSocial',
                image:type
            }

        case 'work':
            return {
                bgColor:'bgColorWork',
                image:type
            }
        case 'study':
            return {
                bgColor:'bgColorStudy',
                image:type
        }   
        case 'exercise':
            return {
                bgColor:'bgColorExercise',
                image:type
            }
    
        default:
            return {
                bgColor:'bgColorSelfCare',
                image:type
            };
    }
    
}