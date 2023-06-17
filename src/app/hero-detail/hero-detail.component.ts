import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {


  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location)
  {

  }
  @Input()selected_hero?: Hero;


  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.selected_hero = hero);
  }

  save(): void {
    if (this.selected_hero) {
      this.heroService.updateHero(this.selected_hero)
        .subscribe(() => this.goBack());
    }
  }


  goBack(): void {
    this.location.back();
  }


}
