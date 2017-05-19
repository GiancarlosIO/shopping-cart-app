import jsdom, { JSDOM } from 'jsdom';
import 'jsdom-global/register'
import _$ from 'jquery';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

const rerequire = jsdom.rerequire;

const $ = _$(window);
chai.use(chaiEnzyme());