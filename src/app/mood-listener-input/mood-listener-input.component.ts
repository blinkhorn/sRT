import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoodListenerInputService } from './mood-listener-input.service';
@Component({
  selector: 'app-mood-listener-input',
  templateUrl: './mood-listener-input.component.html',
  styleUrls: ['./mood-listener-input.component.css']
})
export class MoodListenerInputComponent implements OnInit {
  songTitle: string;

  private mood: string;
  private moodUndercase: string;
  private listener: string;
  private sentenceBeginning: string;
  private sentencePunctuation: string;
  private sentence: string;

  constructor(public moodListenerInputService: MoodListenerInputService) {}

  ngOnInit() {}

  onSubmitMood(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.mood = form.value.mood;
    this.moodUndercase = this.mood.toLowerCase();
    this.generateSentence();
  }

  generateSentence() {
    switch (this.moodUndercase) {
      case 'happy':
        this.sentenceBeginning = 'Great,';
        this.sentencePunctuation = '!';
        break;
      case 'sad':
        this.sentenceBeginning = 'Sorry to hear that';
        this.sentencePunctuation = '.';
        break;
      case 'calm':
        this.sentenceBeginning = 'Cool,';
        this.sentencePunctuation = '.';
        break;
      case 'aggressive':
        this.sentenceBeginning = 'Uh oh,';
        this.sentencePunctuation = '!!!';
        break;
      default:
        this.sentenceBeginning = 'So';
        this.sentencePunctuation = ' .... We don\'t have a song for you.';
        break;
    }
    this.sentence = `${this.sentenceBeginning} you're feeling ${
      this.moodUndercase
    }${this.sentencePunctuation}`;
  }

  getSentenceBeginning(): string {
    return this.sentenceBeginning;
  }

  getSentence(): string {
    return this.sentence;
  }

  getMood(): string {
    return this.mood;
  }

  getListener(): string {
    return this.listener;
  }

  onSubmitListenerType(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.listener = form.value.listener;

    const that = this;
    if (this.listener === 'Refined' || this.listener === 'Basic') {
      this.moodListenerInputService
        .makeRequest(this.mood, this.listener)
        .subscribe(songData => {
          that.songTitle = songData.theSong.title;
        });
    }
  }


}
