import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if (response){
        const favoritedTeachers = JSON.parse(response);
        
        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });
  
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos"/>

      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{ 
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {favorites.map((teacher: Teacher) => (
            <TeacherItem 
              key={teacher.id}
              teacher={teacher}
              favorited={true}
            />
        ))}
        
      </ScrollView>
    </View>
  );
}

export default Favorites;