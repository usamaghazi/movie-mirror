import { setSelectedMovie } from '@/store/slices/movieSlice';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import { useAppDispatch } from '../../store';
import { Movie } from '../../types';
import {
  ItemContainer,
  Poster,
  Title,
  TitleOverlay
} from './styles';

const  { width } = Dimensions.get('window')
const ITEM_WIDTH = width * 0.7
const ITEM_HEIGHT = 280;
const SPACING = 10;
type MovieCarouselProps = {
  popularMovies: Movie[]
}



const MovieCarousel: React.FC <MovieCarouselProps> = ({ popularMovies }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef( new Animated.Value(0)).current
    const flatListRef = useRef<FlatList>(null)

    const router = useRouter()
    const dispatch = useAppDispatch()

    const renderItem = ({ item, index }: { item: Movie, index: number } ) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH
          ]

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8], 
            extrapolate: 'clamp',
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6], // Side items more transparent
            extrapolate: 'clamp',
        });

        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [20, 0, 20], // Side items slightly lower
            extrapolate: 'clamp',
        });

        return (
          <ItemContainer
            ITEM_WIDTH={ITEM_WIDTH}
          onPress={() => {
                  dispatch(setSelectedMovie(item))
                  router.push({pathname: '/(tabs)/Home/[movie]',
                  params: { movie: item.title }})
                    flatListRef.current?.scrollToIndex({ 
                        index, 
                        animated: true 
                    });
                }}>

              <Animated.View 
              style={[styles.slide,{
                transform:[
                  { scale },
                  { translateY }
                ],
                opacity
              }]}>

             <Poster source={{ uri: item.backdrop_path }} />
              <TitleOverlay>
                  <Title>{item.title}</Title>
              </TitleOverlay>
              </Animated.View>
          
          </ItemContainer>
        )
    }

    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { 
            useNativeDriver: true
        }
    );

    const onMomentumScrollEnd = (event: any) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
        setCurrentIndex(index);
    };

    const getItemLayout = (_: any, index: number) => ({
        length: ITEM_WIDTH,
        offset: ITEM_WIDTH * index,
        index,
    });

  return (
    <View>
        <Animated.FlatList
            ref={flatListRef}
            data={popularMovies}
            renderItem={renderItem}
            horizontal
            pagingEnabled={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            onMomentumScrollEnd={onMomentumScrollEnd}
            keyExtractor={(_,i)=>i.toString()}
            snapToInterval={ITEM_WIDTH}
            decelerationRate="fast"
            contentContainerStyle={styles.flatListContent}
            getItemLayout={getItemLayout}
            scrollEventThrottle={16}
            />
        </View>
              
  )
}

export default MovieCarousel

const styles = StyleSheet.create({
    slide: {
        width: ITEM_WIDTH - SPACING * 2,
        height: ITEM_HEIGHT,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 10,
  },
  
  flatListContent: {
        paddingHorizontal: (width - ITEM_WIDTH) / 2,
    },
})