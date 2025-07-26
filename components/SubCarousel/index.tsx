import { useRouter } from 'expo-router';
import React, { useRef } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { useAppDispatch } from '../../store';
import { setSelectedMovie } from '../../store/slices/formSlice';
import { Movie } from '../../types';
import {
  Category,
  CategoryText,
  GradientOverlay,
  MovieCard,
  MovieImage,
  Title,
  TitleOverlay
} from './styles';

const { width } = Dimensions.get('window');
const STORY_WIDTH = 140;
const STORY_HEIGHT = 180;
const SPACING = 12;

interface SubCarouselProps {
  movies: Movie[]
  category: string
}

const MovieCarousel: React.FC<SubCarouselProps> = ({ movies, category }) => {

  
  const { colors } = useSelector((state:RootState) => state.theme)
  const flatListRef = useRef<FlatList>(null);
  const dispatch = useAppDispatch()
  const router = useRouter()

  const renderMovieItem = ({ item, index }: { item: Movie; index: number }) => {
    return (
      <TouchableOpacity
      onPress={()=> {
        dispatch(setSelectedMovie(item))
        router.push({pathname:'/(tabs)/Home/[movie]',
          params: {movie:item.title}})
      }}    
        style={[
          styles.movieContainer,
          { marginLeft: index === 0 ? SPACING : SPACING / 2 }
        ]}
        activeOpacity={0.8}
      >
        <MovieCard
          STORY_WIDTH={STORY_WIDTH}
          STORY_HEIGHT={STORY_HEIGHT}
        >
          <MovieImage
            source={{ uri: item.backdrop_path }}
            resizeMode="cover"
          />
          
          
          <GradientOverlay/>
          {/* {/* <Text style={styles.movieTitle} numberOfLines={1}> {item.title}*</Text>/} */}
            <TitleOverlay>
            <Title>{item.title}</Title>
            </TitleOverlay>
          
        
        </MovieCard>
        
        
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Category>
        <CategoryText
          color={colors.text}>
          {category}
        </CategoryText>
      </Category>
      
      <FlatList
        ref={flatListRef}
        data={movies}
        renderItem={renderMovieItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_,index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToAlignment="start"
        snapToInterval={STORY_WIDTH + SPACING}
        removeClippedSubviews={false}
        initialNumToRender={8}
        maxToRenderPerBatch={5}
        windowSize={10}
      />
    </View>
  );
};

export default MovieCarousel;

const styles = StyleSheet.create({
  
  flatListContent: {
    paddingRight: SPACING,
  },
  movieContainer: {
    alignItems: 'center',
    marginRight: SPACING / 2,
  }
});