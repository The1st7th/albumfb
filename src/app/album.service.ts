import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mockalbums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) { 
    this.albums = database.list('albums');
  }
  getAlbums() {
    return this.albums;
  }
  getAlbumById(albumId: number){
    for (var i = 0; i <= ALBUMS.length - 1; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }
}
