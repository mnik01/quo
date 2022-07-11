import { VFC } from "react";

export const Button: VFC = ({isLoading, text}) => {




  return <button>{isLoading ? circle : text}</button>;
}
