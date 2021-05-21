import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {ListItem, Avatar} from "react-native-elements";

const ListItems = ({ id , chatName , enterChat }) => {
    return (
        <ListItem key={id} bottomDivider onPress={()=>enterChat(id,chatName)}>
            <Avatar
                rounded
                source={{
                    uri:"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:"800"}}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                        SubCHat
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default ListItems

const styles = StyleSheet.create({})