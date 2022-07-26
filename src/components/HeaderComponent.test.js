import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import React from 'react';
import HeaderComponent from "./HeaderComponent";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("<HeaderComponent />", () => {
    it("Should have text 'Task Management App'", () => {
        act(() => {
        
            render(<HeaderComponent></HeaderComponent>, container);
        });
        expect(container.textContent).toBe("Task Management App");
    });
    
})


describe("<HeaderComponent />", () => {
    it("Should have link to LinkedIn", () => {
        act(() => {
            render(<HeaderComponent></HeaderComponent>, container);
        });
        let a = container.getElementsByTagName("a")[0];
        let href = a.attributes.getNamedItem("href").value;
        expect(href).toEqual("https://www.linkedin.com/in/roykrisnadi/");
    });
})
