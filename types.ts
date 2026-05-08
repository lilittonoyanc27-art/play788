/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppScreen = 'menu' | 'theory' | 'tennis_game';

export type CharacterType = 'Gor' | 'Gayane';

export interface TheoryPoint {
  title: string;
  explanation: string;
  example: string;
  translation: string;
}

export interface PhraseQuestion {
  id: number;
  sentence: string;
  translation: string;
  options: string[];
  correctAnswer: string;
}
