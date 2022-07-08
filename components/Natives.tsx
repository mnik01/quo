import { FC } from 'react';
import { View as NView, Text as NText} from 'react-native';


type ViewType = FC<React.ComponentProps<typeof NView> & { className?: string }>;
// @ts-ignore
export const View: ViewType = NView;

type TextType = FC<React.ComponentProps<typeof NText> & { className?: string }>;
// @ts-ignore
export const Text: TextType = NText;
