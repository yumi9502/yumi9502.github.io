import React from  "react" 
import {useStaticQuery,graphql} from "gatsby"
import {Typography,createStyles,makeStyles} from '@material-ui/core'
import {IconLink} from './IconLink'
import {Doughnut} from "react-chartjs-2"

const useStyles=makeStyles(()=>
  createStyles({
    flex:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    typo:{
      margin:'5px',
    },
    gurahu:{
      margin:'0px auto 55px',
    },
  }),
);

export const GitChart=()=>{
    const tempData= useStaticQuery(graphql`
    query {
      githubData {
        data{
          viewer {
            name
            avatarUrl
            isHireable
            resourcePath
            repositories {
              totalCount
              nodes {
                name
                description
                homepageUrl
                forkCount
                createdAt
                updatedAt
                resourcePath
                languages {
                  totalSize
                  totalCount
                  edges {
                    size
                    node {
                      name
                      color
                    }
                  }
                }
    
                stargazers {
                  totalCount
              
                }
              }
            }
          }
        }
      }
    }
    `)
    // リポジトリのtotalCountを取得してリポジトリごとの言語の名前とバイト数を取得する
  const totalRepo=tempData.githubData.data.viewer.repositories.totalCount
  const langName1=[]
  const langSize1=[]
  for(let i=0;i<totalRepo;i++){
    let langEachRepo=tempData.githubData.data.viewer.repositories.nodes[i].languages.totalCount
    for(let j=0;j<langEachRepo;j++){
      langName1.push(tempData.githubData.data.viewer.repositories.nodes[i].languages.edges[j].node.name)
      langSize1.push(tempData.githubData.data.viewer.repositories.nodes[i].languages.edges[j].size)
    }
  }
  console.log(langName1);
  console.log(langSize1);
  // 言語の名前とバイト数をプロパティの組で[key,value]からなる配列にする
  var langSet = [];
  for(var i=0;i<langSize1.length;i++){
  
    langSet.push([langName1[i],langSize1[i]]);
    
  }
  console.log(langSet);
  // 言語の名前ごとの合計を出す
  var sum={};
  for(var idi=0;idi<langSet.length;idi++){
     var key=langSet[idi][0];     // i++されるたび変数keyにlangSet[i]のキーを入れて
    if(key in sum){            // sumのキーに変数keyと同じキーが存在するかチェック
      sum[key]+=langSet[idi][1]; // 存在するときは同じキーごとにlangSet[i]の値を足す
    }else{
      sum[key]=langSet[idi][1];  //存在しないときはキーに値を入れる
    }
  }
  console.log(sum);
  delete sum['Mask']
  delete sum['HLSL']
  delete sum['Mathematica']
  delete sum['ShaderLab']
  
  const label1=[];
  const data1=[];
  for(var key2 in sum){
    label1.push(key2);
    data1.push(sum[key2])
  }
  console.log(label1);
  console.log(data1);
    const data={
      labels:label1,
      datasets:[{
        backgroundColor:["#178600","#2B7489","#e34c26","#563D7C","#f1e05a"],
        data:data1,
      },],
    };
  const options ={
    maintainAspectRatio: false,
  };
  const classes=useStyles();
  
  return(
    <div>
      <div className={classes.flex}>
        <Typography 
        className={classes.typo} 
        color="textSecondary" 
        variant="h6" 
        gutterBottom>
        開発で利用しているプログラム言語 In GitHub
        </Typography>
        <IconLink title="github" url="https://github.com/yumi9502" />
      </div>
      <div>
    <Doughnut data={data} width={550} height={550} options={options} />
    </div>
    </div>
  )
  }