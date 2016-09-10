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
  model = new Plan(1,'','',[]);
  error = 'Pick 13 points by clicking on the map.';

  constructor(private planService: PlanService, private router: Router) { }

  onSubmit() {
    this.planService.submitPlan(this.model)
      .then(_ => this.router.navigate(['personal-rankings']))
      .catch(err => this.error = err);
  }

  ngOnInit() {
    const WIDTH = document.getElementById('design-map').offsetWidth;

    d3.select('#design-map > svg').remove();
    let svg = d3.select('#design-map')
      .append('svg')
      .attr('width',"100%");

    let canvas = svg.append('g');

    let projection = d3.geo.mercator();

    projection
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

      let maps = canvas.append('g').attr('class','counties');
      let seeds = canvas.append('g').attr('class','seeds');

      let updateSeeds = () => {
        seeds.selectAll('circle')
            .data(this.model.seeds)
          .enter().append('circle')
            .attr('class','seed')
            .attr('cx', (d) => projection(d)[0])
            .attr('cy', (d) => projection(d)[1]);
      };

      maps.selectAll('path').data(boundaries.features)
        .enter().append('path')
          .attr('class', 'county')
          .attr('d', path)
          .on('click', (evt) => {
            // TODO support clicking and dragging existing circles
            if (this.model.seeds.length == 13) return;

            this.model.seeds.push(projection.invert(d3.mouse(seeds.node())));
            if (this.model.seeds.length < 13) {
              this.error = `Pick ${13 - this.model.seeds.length} more points on the map.`;
            } else {
              this.error = null;
            }
            updateSeeds();
          });
    });

    onSizeChange();
  }
}
