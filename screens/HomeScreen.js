import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import tailwind from 'tailwind-rn';
import { useSubscription } from '@apollo/client';
import { Video } from 'expo-av';
import { PAYMENT_STATUS_SUBSCRIPTION } from '../graphql/queries';

export default function HomeScreen({ route }) {
  const { username } = route.params;
  const [paid, setPaid] = useState(false);
  
  const { data, loading, error } = useSubscription(PAYMENT_STATUS_SUBSCRIPTION, {
    variables: { username },
  });

  useEffect(() => {
    if (data) {
      setPaid(data.paymentStatusChanged.paid);
    }
  }, [data]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;

  return (
    <View style={tailwind('flex-1 justify-center items-center')}>
      {paid ? (
        <>
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=TRY6gfKrokE' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={{ width: 300, height: 300 }}
          />
          <Text style={tailwind('text-xl mt-4')}>Aquí tienes tu contenido exclusivo, ¡disfruta!</Text>
        </>
      ) : (
        <>
          <Text style={tailwind('text-xl mb-4')}>Ups, todavía no pagas, disfruta la app en su versión gratuita</Text>
          <Button
            title="Si quieres actualizar tu plan y disfrutar de la versión premium con contenido exclusivo hazlo aquí"
            onPress={() => {
              // Aquí dirigimos al usuario al backend para actualizar su plan
              Linking.openURL('https://brian.uva.beauty/');
            }}
          />
        </>
      )}
    </View>
  );
}
