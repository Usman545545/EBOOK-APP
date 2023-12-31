import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions, Linking, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookInfoFetcher = () => {
  const [books, setBooks] = useState([]);
  const [numColumns, setNumColumns] = useState(3);
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let apiEndpoint = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';

        if (searchText.trim() !== '') {
          apiEndpoint = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchText)}`;
        }

        const response = await fetch(apiEndpoint);
        const data = await response.json();

        setBooks(processBooksData(data));
      } catch (error) {
        console.error('Error fetching books:', error);
        // Handle the error appropriately
      }
    };

    fetchBooks();
  }, [searchText]);

  const processBooksData = (data) => {
    if (data && data.items && Array.isArray(data.items)) {
      return data.items.map((item) => {
        const book = item.volumeInfo;
        return {
          id: item.id,
          title: book.title,
          authors: book.authors ? book.authors.join(', ') : 'Unknown Author',
          thumbnail: book.imageLinks ? book.imageLinks.thumbnail : '',
          description: book.description || 'No description available.',
          infoLink: book.infoLink,
        };
      });
    } else {
      console.error('Invalid data format:', data);
      return [];
    }
  };

  const handlePress = (book) => {
    if (book.infoLink) {
      Linking.openURL(book.infoLink);
    }
  };

  const toggleFavorite = (bookId) => {
    // Check if the book is already in favorites
    if (favorites.includes(bookId)) {
      // Remove from favorites
      setFavorites(favorites.filter((id) => id !== bookId));
    } else {
      // Add to favorites
      setFavorites([...favorites, bookId]);
    }
  };

  const isFavorite = (bookId) => favorites.includes(bookId);

  const renderBook = ({ item, index }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.bookContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.authors}</Text>
      <Text style={styles.bookDescription} numberOfLines={1}>
        {item.description}
      </Text>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
        <Text style={{ fontSize: 20 }}>{isFavorite(item.id) ? '❤️' : '🤍'}</Text>
        <Text>{isFavorite(item.id) ? 'Added to Favorites' : 'Add to Favorites'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderFooter = () => (
    <TouchableOpacity onPress={() => navigation.navigate('Book', { books: books.slice(4), startIndex: 0 })}>
      <Text style={styles.viewMore}>View More ></Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Books..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <FlatList
        key={numColumns}
        data={books.slice(0, 5)}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 50,
  },
  container: {
    marginTop: 30,
    marginBottom: 50,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bookContainer: {
    width: (Dimensions.get('window').width - 10 * 2 - 10 * 4) / 2,
    margin: 10,
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%',
    height: 160,
    resizeMode: 'contain',
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  bookAuthor: {
    color: '#666',
    fontSize: 10,
    textAlign: 'center',
  },
  bookDescription: {
    fontSize: 8,
    textAlign: 'center',
  },
  viewMore: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 7,
  },
  favoriteButton: {
    marginTop: 5,
  },
});

export default BookInfoFetcher;
