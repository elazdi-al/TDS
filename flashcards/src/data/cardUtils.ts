export interface Card {
	id: number;
	front: string;
	back: string;
	week: string;
}

export function shuffleCards(cards: Card[]): Card[] {
	const shuffled = [...cards];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
