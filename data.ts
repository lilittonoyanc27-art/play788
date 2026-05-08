import { TheoryPoint, PhraseQuestion } from './types';

export const THEORY_POINTS: TheoryPoint[] = [
  {
    title: "Muy vs Mucho",
    explanation: "Muy-ն օգտագործվում է ածականների և մակբայների հետ: Mucho-ն օգտագործվում է գոյականների հետ կամ բայից հետո:",
    example: "Muy bien (Շատ լավ), Mucho trabajo (Շատ աշխատանք).",
    translation: "Muy (շատ) + ածական, Mucho (շատ) + գոյական:"
  },
  {
    title: "Poco vs Un poco",
    explanation: "Poco-ն նշանակում է 'քիչ' (բացասական իմաստով): Un poco-ն նշանակում է 'մի քիչ' (դրական կամ չեզոք):",
    example: "Tengo poco tiempo (Քիչ ժամանակ ունեմ), Estoy un poco cansado (Մի քիչ հոգնած եմ):",
    translation: "Poco (քիչ), Un poco (մի քիչ):"
  },
  {
    title: "Bastante vs Suficiente",
    explanation: "Bastante-ն նշանակում է 'բավականին' (շատ): Suficiente-ն նշանակում է 'բավարար' (այնքան, որքան պետք է):",
    example: "Hace bastante calor (Բավականին շոգ է), Es suficiente comida (Բավարար սնունդ է):",
    translation: "Bastante (բավականին), Suficiente (բավարար):"
  }
];

export const TENNIS_QUESTIONS: PhraseQuestion[] = [
  { id: 1, sentence: "Ella es ___ inteligente.", translation: "Նա շատ խելացի է:", options: ["muy", "mucho", "poco"], correctAnswer: "muy" },
  { id: 2, sentence: "Tengo ___ trabajo hoy.", translation: "Այսօր շատ աշխատանք ունեմ:", options: ["muy", "mucho", "bastante"], correctAnswer: "mucho" },
  { id: 3, sentence: "Estoy ___ cansado.", translation: "Մի քիչ հոգնած եմ:", options: ["un poco", "poco", "mucho"], correctAnswer: "un poco" },
  { id: 4, sentence: "Hay ___ comida para todos.", translation: "Բավարար սնունդ կա բոլորի համար:", options: ["suficiente", "bastante", "poco"], correctAnswer: "suficiente" },
  { id: 5, sentence: "Hace ___ frío afuera.", translation: "Դրսում բավականին ցուրտ է:", options: ["bastante", "suficiente", "poco"], correctAnswer: "bastante" },
  { id: 6, sentence: "Él habla ___.", translation: "Նա շատ է խոսում:", options: ["mucho", "muy", "poco"], correctAnswer: "mucho" },
  { id: 7, sentence: "Tengo ___ dinero, no puedo comprarlo.", translation: "Քիչ փող ունեմ, չեմ կարող դա գնել:", options: ["poco", "un poco", "mucho"], correctAnswer: "poco" },
  { id: 8, sentence: "La sopa está ___ caliente.", translation: "Ապուրը շատ տաք է:", options: ["muy", "mucho", "suficiente"], correctAnswer: "muy" },
  { id: 9, sentence: "Bebo ___ agua.", translation: "Շատ ջուր եմ խմում:", options: ["mucha", "mucho", "muy"], correctAnswer: "mucha" },
  { id: 10, sentence: "Es ___ tarde.", translation: "Բավականին ուշ է:", options: ["bastante", "suficiente", "un poco"], correctAnswer: "bastante" },
  { id: 11, sentence: "No es ___ para mí.", translation: "Դա ինձ համար բավարար չէ:", options: ["suficiente", "bastante", "mucho"], correctAnswer: "suficiente" },
  { id: 12, sentence: "Me gusta ___ cantar.", translation: "Ես շատ եմ սիրում երգել:", options: ["mucho", "muy", "poco"], correctAnswer: "mucho" },
  { id: 13, sentence: "Él es ___ bajo.", translation: "Նա մի քիչ ցածրահասակ է:", options: ["un poco", "poco", "mucho"], correctAnswer: "un poco" },
  { id: 14, sentence: "Hay ___ gente en la calle.", translation: "Փողոցում շատ մարդ կա:", options: ["mucha", "mucho", "muy"], correctAnswer: "mucha" },
  { id: 15, sentence: "El libro es ___ interesante.", translation: "Գիրքը բավականին հետաքրքիր է:", options: ["bastante", "suficiente", "poco"], correctAnswer: "bastante" },
  { id: 16, sentence: "Comemos ___.", translation: "Մենք քիչ ենք ուտում:", options: ["poco", "un poco", "mucho"], correctAnswer: "poco" }
];
