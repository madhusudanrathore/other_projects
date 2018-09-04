export function selectBook( book ){
	//it's an ActionCreator, it needs to return an action
	//an object with a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}