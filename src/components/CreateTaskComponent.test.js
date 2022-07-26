import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import CreateTaskComponent from "./CreateTaskComponent";
import React from 'react';

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

describe("<CreateTaskComponent />", () => {
    it("Should have text 'Add task'", () => {
        act(() => {
            render(<CreateTaskComponent />, container);
        });
        expect(container.textContent).toBe("Add Task");
    });
})
