// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

//Beck

import { results } from "../src/components/searchResults/searchResults";
import { isHovering } from "../src/components/businessDetails/mapOfAllBiz";
import { userId, arr } from "../src/components/userProfile/userProfile";
import { biz } from "../src/components/userProfile/userProfile";

it("testing search", () => expect(results).toBeFalsy());
it("mapOfAllBiz", () => expect(isHovering).toBeFalsy());
it("userID", () => expect(userId).toBeFalsy());
it("arr", () => expect(arr).toBeFalsy());
it("biz", () => expect(biz).toBeFalsy());

//Eric
import {location, search} from "../src/components/headers/mainHeader";

it("location", () => expect(location).toBeFalsy());
it("search", () => expect(search).toBeUndefined());
it("location", () => expect(location).toBeUndefined());
it("location", () => expect(location).toBe(location));
it("search", () => expect(search).toBe(search));

