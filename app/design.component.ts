import { Component } from '@angular/core';
import { Map, TileLayer, LatLng } from 'leaflet';

@Component({
  selector: 'my-app',
	template: `
    <div class="row starter-row">
      <div id="design-map"></div>
    </div>
    <div class="row">
      <form>
        <div class="form-group">
          <label for="instructions">Instructions</label>
          <div class="controls">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <div class="controls">
            <input type="text" id="name" class="form-control" placeholder="description">
          </div>
        </div>
        <div class="form-group">
          <label for="notes">Notes</label>
          <div class="controls">
            <textarea id="notes" class="form-control" rows="3"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="controls">
            <button id="generate" class="btn btn-default">Generate Districts</button>
          </div>
        </div>
      </form>
    </div>
  `
})

export class DesignComponent {
  map: Map;

  ngOnInit() {
    let layer = new TileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    });
    this.map = new Map('design-map', {
      zoomControl: false,
      dragging: false,
      center: new LatLng(34.86, -82.78),
      zoom: 6,
      layers: [layer]
    });
  }
}
