import 'react-native-get-random-values';
import { WebView } from 'react-native-webview';
import tailwind from 'tailwind-rn';
import { useSubscription } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Linking } from 'react-native';
import { PAYMENT_STATUS_SUBSCRIPTION } from '../graphql/queries';
import Toast from 'react-native-toast-message';

export default function HomeScreen({ route }) {
  const id = route.params.username;
  const [paid, setPaid] = useState(false);

  const { data, error } = useSubscription(PAYMENT_STATUS_SUBSCRIPTION, {
    variables: { id },
    onError: (e) => {
      console.error("Subscription error: ", e);
      Toast.show({
        type: 'error',
        text1: 'Subscription Error',
        text2: e.message || 'An error occurred while subscribing.',
      });
    },
  });

  useEffect(() => {
    if (data) {
      setPaid(data.onPaymentStatusChanged.payment_status === 'PAID');
    }
  }, [data]);

  if (error) {
    console.error(error);
    return <Text>Error! {error.message}</Text>;
  }

  return (
    <View style={tailwind('flex-1 justify-center items-center')}>
      {paid ? (
        <>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/TRY6gfKrokE' }}
            style={{ width: 300, height: 300 }}
          />
          <Text style={tailwind('text-xl mt-4')}>Aquí tienes tu contenido exclusivo, ¡disfruta!</Text>
        </>
      ) : (
        <>
          <Text style={tailwind('text-xl mb-4')}>Ups, todavía no pagas, disfruta la app en su versión gratuita</Text>
          <Text style={tailwind('text-xl mb-4')}>Te invitamos a disfrutar de la versión premium con contenido exclusivo</Text>
          <Pressable
            onPress={() => {
              // Aquí dirigimos al usuario al backend para actualizar su plan
              Linking.openURL('https://buy.stripe.com/test_00g6r33XO4UeeI09AA');
            }}
          >
            <Text style={tailwind('text-blue-500 underline')}>Actualiza tu plan aquí</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}
