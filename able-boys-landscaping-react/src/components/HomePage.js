import React, { Component } from 'react'
import NavBar from './NavBar.js';
import { makeStyles } from '@material-ui/core/styles'
import BackgroundImage from './images/main.jpg'
const useStyles = makeStyles(theme => ({
  bg1: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: '100vh',
    width: '100%'
  }
}))
const HomePage = (props) => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <section className={classes.sectionImage, classes.bg1} >
      </section>
      <h1>

        Est sit amet facilisis magna etiam tempor. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Urna molestie at elementum eu facilisis sed odio. Facilisis leo vel fringilla est ullamcorper eget. Lectus arcu bibendum at varius vel. Sagittis id consectetur purus ut faucibus. Velit egestas dui id ornare. Imperdiet proin fermentum leo vel orci porta non. Tellus integer feugiat scelerisque varius morbi enim nunc. Blandit turpis cursus in hac habitasse platea dictumst quisque. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Arcu non sodales neque sodales ut. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Justo nec ultrices dui sapien eget mi proin sed libero. Accumsan tortor posuere ac ut consequat semper viverra. Nunc sed id semper risus in. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Enim praesent elementum facilisis leo vel fringilla.

        Nulla facilisi etiam dignissim diam quis. Eget felis eget nunc lobortis mattis aliquam. Et magnis dis parturient montes. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Tellus elementum sagittis vitae et leo duis ut. Lacinia at quis risus sed vulputate odio ut enim. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Tristique senectus et netus et. Morbi non arcu risus quis varius quam quisque id diam. Odio aenean sed adipiscing diam donec adipiscing tristique. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nunc mattis enim ut tellus. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius sit amet. Interdum posuere lorem ipsum dolor sit amet. Pulvinar sapien et ligula ullamcorper malesuada proin. Rhoncus urna neque viverra justo nec ultrices dui sapien. Sit amet purus gravida quis blandit. Vel risus commodo viverra maecenas accumsan. Eu consequat ac felis donec et odio. Massa vitae tortor condimentum lacinia quis vel eros donec. Enim sit amet venenatis urna cursus eget nunc. Fermentum odio eu feugiat pretium. Leo duis ut diam quam. Id aliquet risus feugiat in. Turpis massa tincidunt dui ut ornare lectus. At tempor commodo ullamcorper a lacus.
        Lacus viverra vitae congue eu consequat ac felis donec et. Fames ac turpis egestas maecenas pharetra. Volutpat diam ut venenatis tellus in metus. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Donec ultrices tincidunt arcu non sodales neque. Lectus urna duis convallis convallis tellus id interdum velit. Lorem donec massa sapien faucibus et. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Varius quam quisque id diam vel quam elementum. Ultricies integer quis auctor elit. Non sodales neque sodales ut etiam sit. Risus pretium quam vulputate dignissim suspendisse in. Accumsan sit amet nulla facilisi morbi tempus iaculis. Enim ut sem viverra aliquet eget sit amet tellus. A pellentesque sit amet porttitor.

        Eu augue ut lectus arcu. Sit amet mauris commodo quis imperdiet massa tincidunt. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Facilisis leo vel fringilla est ullamcorper. Malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada fames ac. Tempor orci dapibus ultrices in iaculis nunc sed augue. Interdum velit laoreet id donec ultrices tincidunt arcu non. Eu turpis egestas pretium aenean pharetra. Velit aliquet sagittis id consectetur purus ut. Lobortis scelerisque fermentum dui faucibus in. Pretium vulputate sapien nec sagittis aliquam malesuada. Accumsan sit amet nulla facilisi morbi. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Iaculis at erat pellentesque adipiscing commodo elit at.
      </h1>
    </>
  );
}
export default HomePage;