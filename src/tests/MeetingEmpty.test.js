import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import MeetingEmpty from '../components/meeting/MeetingEmpty';

let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders meeting empty", () => {
  act(() => {
    render(<MeetingEmpty />, container);
  });
  expect(container.textContent).toBe("Nenhum encontro agendado!!!");
});