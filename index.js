ParseShp.prototype.parseZMultiPoint = function(data) {
  var geoJson = this.parseMultiPoint(data);
  var num;
  if (geoJson.type === 'Point') {
    geoJson.coordinates.push(data.readDoubleLE(72));
    return geoJson;
  } else {
    num = geoJson.coordinates.length;
  }
  var zOffset = 52 + (num << 4);
  geoJson.coordinates = this.parseZPointArray(data, zOffset, num, geoJson.coordinates);
  return geoJson;
};