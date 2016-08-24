/// <reference path="../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';
import 'todomvc-app-css/index.css';
import {provideStore, combineReducers} from '@ngrx/store';

import {todos, visibility, initialTodo, initialVisibility} from './app/reducers/todos';

import './index.scss';

import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {routes, RootComponent} from './routes';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(RootComponent, [
  provideRouter(routes),
  provideStore(combineReducers({todos, visibility}), {todos: [initialTodo], visibility: initialVisibility})
]);
