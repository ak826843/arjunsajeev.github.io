---
layout: post
title: Using Youtube Data API v3 to get list of videos
---


The [Youtube Data API v3](https://developers.google.com/youtube/v3/) can be used to obtain videos in uploads playlist of a user or channel.

##Steps

###Getting an API key

- You can obtain an API key by going to [Google Developer Console](https://console.developers.google.com/)

- Create a new project

- In the sidebar on the left, expand APIs & auth. Next, click APIs. In the list of APIs, make sure the status is ON for the YouTube Data API v3.

- In the sidebar on the left, select Credentials.The API supports two types of OAuth and API key.For this project, we will be creating an API key.For more information visit [Creating API keys](https://developers.google.com/youtube/registering_an_application#Create_API_Keys)

### Getting videos in Upload Playlist of user

- The official documentation does not contain any information about accessing this API using javascript but we can access the API with an HTTP request.You can use jquery '$.get()' or '$http()' in AngularJS.Some slight syntax changes might be required depending on the method used.

- First we have to obtain the upload playlist id

{% highlight js %}

var request = {
          url: 'https://www.googleapis.com/youtube/v3/channels',
          method: 'GET',
          params: {
               part:'contentDetails',
               forUsername: YOUTUBE_USER_NAME,
               key:'YOUR_API_KEY'
             }
        };

{% endhighlight %}

If result is the object returned by the request the playlist Id can be determined by

{% highlight js %}

var playlist_id = result.data.items[0].contentDetails.relatedPlaylists.uploads;

{% endhighlight %}



- Getting videos in the Upload Playlist with the id obtained

{% highlight js %}

var request = {
    url: https://www.googleapis.com/youtube/v3/playlistItems',
    method: 'GET',
    params :{
              part:'snippet',
              maxResults: 10,//maximum number of results
              playlistId: playlist_id,//playlist id from previous step
              key:'YOUR_API_KEY'
              }
            };

{% endhighlight %}

If result is the object returned by this request then we can store video details into a 'Videos' object using

{% highlight js %}

var videos = {};

result.data.items.forEach(function(item){
         videos.push({title: item.snippet.title,
                      videoId: item.snippet.resourceId.videoId
                      });
       });

 {% endhighlight %}

 URLs for videos can be generated using the video id.

 {% highlight js %}

 var url ="https://www.youtube.com/watch?v=" + videoId;

 {% endhighlight %}
