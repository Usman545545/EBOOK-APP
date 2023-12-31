import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, Linking, TextInput } from 'react-native';

const Book = ({ route }) => {
  const { books, startIndex } = route.params ?? { books: [], startIndex: 0 };
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState([]);

  const handlePress = (link) => {
    if (link) {
      Linking.openURL(link);
    }
  };

  const filteredBooks = books.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const toggleFavorite = (bookId) => {
    if (favorites.includes(bookId)) {
      setFavorites(favorites.filter((id) => id !== bookId));
    } else {
      setFavorites([...favorites, bookId]);
    }
  };

  const isFavorite = (bookId) => favorites.includes(bookId);

 const renderBook = ({ item }) => (
  <TouchableOpacity onPress={() => handlePress(item.infoLink)} style={styles.bookContainer}>
    <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
    <Text style={styles.bookTitle}>{item.title}</Text>
    <Text style={styles.bookAuthor}>{item.authors}</Text>
    <Text style={styles.bookDescription} numberOfLines={1}>
      {item.description}
    </Text>
    <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
      <Text style={{ fontSize: 20 }}>{isFavorite(item.id) ? '❤️' : '🤍'}</Text>
      <Text style={{ marginTop: 5, color: 'black' }}>
        {isFavorite(item.id) ? 'Added to Favorites' : 'Add to Favorites'}
      </Text>
    </TouchableOpacity>
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
        data={filteredBooks}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        initialScrollIndex={startIndex >= 6 ? startIndex - 6 : startIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  bookContainer: {
    width: (Dimensions.get('window').width - 10 * 2 - 10 * 4) / 2 + 5,
    margin: 10,
    alignItems: 'center',
  },
  thumbnail: {
    width: (Dimensions.get('window').width - 10 * 2 - 10 * 4) / 2,
    height: 140,
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
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 15,
    padding: 10,
    borderRadius: 7,
  },
  favoriteButton: {
    marginTop: 5,
  },
});

export default Book;
