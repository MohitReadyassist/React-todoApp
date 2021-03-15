import { applyMiddleware, createStore } from 'redux';

export const findByTestAtrr = (component: { (wrapper: any, arg1: string): void; find?: any; }, attr: string) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};
