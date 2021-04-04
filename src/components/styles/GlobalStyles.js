import styled, { createGlobalStyle } from "styled-components"
import { themes } from "./ColourStyles"

export const GlobalStyles = createGlobalStyle`
    body{
        background:${themes.light.backgroundColor};

        @media (prefers-color-sheme: dark){
            background:${themes.dark.backgroundColor};
        }   
    }
`
