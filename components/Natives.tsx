import { FC } from 'react';
import {
  View as NView,
  Text as NText,
  FlatList as NFlatList,
  Button as NButton,
  TouchableOpacity as NTouchableOpacity,
} from 'react-native';


type ViewType = FC<React.ComponentProps<typeof NView> & { className?: string }>;
// @ts-ignore
export const View: ViewType = NView;

type TextType = FC<React.ComponentProps<typeof NText> & { className?: string }>;
// @ts-ignore
export const Text: TextType = NText;

type FlatListType = FC<React.ComponentProps<typeof NFlatList> & { className?: string }>;
// @ts-ignore
export const FlatList: FlatListType = NFlatList;

type ButtonType = FC<React.ComponentProps<typeof NButton> & { className?: string }>;
// @ts-ignore
export const Button: ButtonType = NButton;

type TouchableOpacityType = FC<React.ComponentProps<typeof NTouchableOpacity> & { className?: string }>;
// @ts-ignore
export const TouchableOpacity: TouchableOpacityType = NTouchableOpacity;
