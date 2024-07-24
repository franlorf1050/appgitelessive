// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  // Bootstrap requires jQuery to be available globally
  window.$ = $;
  window.jQuery = $;
});
