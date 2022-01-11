import React from "react";
import styled from "styled-components";
import { theme } from "./theme";

export default function LoadingPage () {
    return (
        <LoadingPageWrapper>
            <div>
                <h1 className="loadingPageH h1">ToDoTo</h1>
                <h1 className="loadingPageH h2">gether</h1>
            </div>
        </LoadingPageWrapper>      
    )
}

const LoadingPageWrapper = styled.div`
    width: 100%;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;

    .loadingPageH {
        display: inline-block;
        animation: slideText 2s infinite linear;
    }
    .h1 {
        color: ${theme.titleColor};
    }

    @keyframes slideText {
        0% { transform: rotate(0deg)}
        25% { transform: rotate(25deg) }
        50% { transform: rotate(0deg) }
        75% { transform: rotate(-25deg) }
        100% { transform: rotate(0deg) }
    }
`;