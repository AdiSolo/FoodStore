import View from './view';
import icons from '../../img/icons.svg';

class resultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again!';
  _message = '';
  _generateMarkup() {
    return this._data
      .map(rec => {
        return ` 
    <li class="preview">
    <a class="preview__link preview__link--active" href="#${rec.id}">
      <figure class="preview__fig">
        <img src="${rec.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${rec.title}</h4>
        <p class="preview__publisher">${rec.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>
  `;
      })
      .join('');
  }
}

export default new resultsView();
