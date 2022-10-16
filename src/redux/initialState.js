const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: '',
      categoryId: ''
    },
    {
      id: '2',
      title: 'Lorem Ipsum',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01-01-2022'),
      author: 'Jane Doe',
      category: '',
      categoryId: ''
    },
    {
      id: '3',
      title: 'Test Test',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-03-2022'),
      author: 'Joanne Doe',
      category: '',
      categoryId: ''
    }
  ],
  categories: [
    {
      id: '1',
      title: 'Sport'
    },
    {
      id: '2',
      title: 'News'
    },
    {
      id: '3',
      title: 'Movies'
    }
  ],
};

export default initialState;