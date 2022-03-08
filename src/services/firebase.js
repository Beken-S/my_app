import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, push, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBAtieH14Bc6A3f_IQZHhMkQytxO-zrxUg',
  authDomain: 'my-chat-d2f25.firebaseapp.com',
  databaseURL:
    'https://my-chat-d2f25-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'my-chat-d2f25',
  storageBucket: 'my-chat-d2f25.appspot.com',
  messagingSenderId: '147606323623',
  appId: '1:147606323623:web:6572d2012134c38396b682',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

const profilesRef = ref(database, 'profiles');
const getProfileRef = (userId) => ref(database, `profiles/${userId}`);
const getProfileUsernameRef = (userId) =>
  ref(database, `profiles/${userId}/username`);
const getProfileShowUsernameRef = (userId) =>
  ref(database, `profiles/${userId}/showUsername`);

const chatsRef = ref(database, 'chats');
const getNewChatRef = () => ref(database, `chats/chat${push(chatsRef).key}`);
const getChatRef = (chatId) => ref(database, `chats/${chatId}`);
const getChatNameRef = (chatId) => ref(database, `chats/${chatId}/name`);

const messagesRef = ref(database, 'messages');
const getMessageListRef = (chatId) => ref(database, `messages/${chatId}`);
const getNewMessageRef = (chatId) => {
  return ref(
    database,
    `messages/${chatId}/msg${push(getMessageListRef(chatId)).key}`
  );
};
const getMessageRef = (chatId, messageId) => {
  return ref(database, `messages/${chatId}/${messageId}`);
};

export {
  auth,
  database,
  profilesRef,
  getProfileRef,
  getProfileUsernameRef,
  getProfileShowUsernameRef,
  chatsRef,
  getNewChatRef,
  getChatRef,
  getChatNameRef,
  messagesRef,
  getMessageListRef,
  getNewMessageRef,
  getMessageRef,
};
