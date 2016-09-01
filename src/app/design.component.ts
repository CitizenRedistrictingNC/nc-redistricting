import { Component } from '@angular/core';
import { Plan } from './plan.class';
import { PlanService } from './plan.service';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import * as topojson from 'topojson';

@Component({
  selector: 'app-root',
  // TODO the styles defined in the component aren't taking, I just stuck a copy
  // in index.css for the moment.
  styleUrls: [ 'app/design.component.css' ],
	templateUrl: 'app/design.component.html'
})

export class DesignComponent {
  model = new Plan(1,'','');
  error = null

  constructor(private planService: PlanService, private router: Router) { }

  onSubmit() {
    this.planService.submitPlan(this.model)
      .then(_ => this.router.navigate(['personal-rankings']))
      .catch(err => this.error = err);
  }

  ngOnInit() {
    const WIDTH = document.getElementById('design-map').offsetWidth;

    d3.select('#design-map > svg').remove();
    let g = d3.select('#design-map')
      .append('svg')
      .attr('width',"100%")
      .append('g');

    let projection = d3.geo.albers()
      .scale(6000)
      .center([0,0])
      .rotate([79.6,-34.5,-1]);

    let path = d3.geo.path()
      .projection(projection);

    let onSizeChange = () => {
      const newWidth = document.getElementById('design-map').offsetWidth;
      d3.select('svg > g').attr('transform', `scale(${ newWidth / 900 })`);
      d3.select('svg').style('height', newWidth*0.4);
    };

    d3.select(window)
      .on('resize', onSizeChange);

    d3.json("/boundaries.topojson", (err, nc) => {
      if (err) { return console.log(err); }

      let boundaries = topojson.feature(nc, nc.objects.nc);

      g.attr('class','counties')
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
    });

    onSizeChange();
  }
}
