import { YoutubePipe } from '../shared/pipes/youtube.pipe';

describe('YoutubePipe', () => {
  it('create an instance', () => {
    const pipe = new YoutubePipe();
    expect(pipe).toBeTruthy();
  });
});
