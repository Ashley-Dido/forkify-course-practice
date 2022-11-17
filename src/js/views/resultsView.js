import icons from 'url:../../img/icons.svg';
import View from './View.js';
import previewView from './previewView.js';


class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMassage = 'No recipe found! Please try another one';
  _message = '';

  _generateMarkup() {

    return this._data.map(result => previewView.render(result, false)).join('')

  }

}

export default new ResultsView();
