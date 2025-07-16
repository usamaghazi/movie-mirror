import styled from 'styled-components/native'

interface ReviewCardProps {
    userName?:string
    dateText?:string,
    reviewTextColor?:string
}

export const ReviewCardContainer = styled.View({
    marginTop:20
})

export const ReviewCardInfo = styled.View({
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight:10
})

export const PersonalInfo = styled.View({
    flexDirection:'row',
    alignItems:'center'
})

export const Picture = styled.Image({
    height:50,
    width:50,
    borderRadius:30,
}) 

export const UserName = styled.Text<ReviewCardProps>(props => ({
        fontSize:18,
        fontWeight:'bolder',
        color: props.userName,
        marginLeft:10
}))

export const RateDateContainer = styled.View({
    flexDirection:'row',
    alignItems:'center',
    marginTop:10
})

export const StarsContainer = styled.View({
    flexDirection:'row'
})

export const ReviewDate = styled.Text<ReviewCardProps>(props=>({
    fontSize:14,
    fontWeight:'400',
    color:props.dateText,
    marginLeft:8
}))

export const ReviewText = styled.Text<ReviewCardProps>(props =>({
    fontSize:14,
    fontWeight:'normal',
    color: props.reviewTextColor,
    marginTop:10,
    width:'95%'
}))