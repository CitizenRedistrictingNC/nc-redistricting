import { Component } from '@angular/core';
import * as d3 from 'd3';
import * as topojson from 'topojson';

@Component({
  selector: 'app-root',
  // TODO the styles defined in the component aren't taking, I just stuck a copy
  // in index.css for the moment.
  styleUrls: [ 'app/design.component.css' ],
	template: `
    <div class="row starter-row">
      <div id="design-map"></div>
    </div>
    <div class="row">
      <form>
        <div class="form-group">
          <label for="instructions">Instructions</label>
          <div class="controls">
            Pick 13 points on the map above by clicking.
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
  ngOnInit() {
    // TODO get width, monitor screen width changes
    const width = document.getElementById('design-map').offsetWidth;
    const height = 400;
    let svg = d3.select('#design-map')
      .append('svg')
      .attr('width',width)
      .attr('height',height);

    // TODO scale depends on window width
    let projection = d3.geo.albers()
      .scale(7500)
      .center([0,0])
      .rotate([79.9,-35.2,-1])
      .translate([width / 2, height / 2]);

    let path = d3.geo.path()
      .projection(projection);

    svg.append('rect')
      .attr('class','map-background')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height);

    d3.json("/boundaries.topojson", (err, nc) => {
      if (err) { return console.log(err); }

      let boundaries = topojson.feature(nc, nc.objects.nc);

      svg.append('g')
          .attr('class','counties')
        .selectAll('path')
          .data(boundaries.features)
        .enter().append('path')
          .attr('class', 'county')
          .attr('d', path)
          .on('click', () => {
            console.log("|click");
          });

      // TODO Add a click listener - when a click is detected, make a point on
      // the map, and generate a voronoi diagram for it.
    })
  }
}
