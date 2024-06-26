import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ContactThumbnail({name, phone, avatar, textColor, onPress}) {
  const colorStyle = {
    color: textColor,
  };

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View>
        <Image source={{uri: avatar}} style={styles.avatar} />
        {name !== '' && <Text style={[styles.name, colorStyle]}>{name}</Text>}
      </View>
      {phone !== '' && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{color: textColor}} />
          <Text style={[styles.phone, colorStyle]}>{phone}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default ContactThumbnail;

ContactThumbnail.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
  onPress: PropTypes.func,
};

ContactThumbnail.defaultProps = {
  name: '',
  phone: '',
  textColor: 'white',
  onPress: null,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
