/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const freq = [5, 3, 4, 3, 4];
const passed = 24;
const failed = 8;

export const data = [
  ['Week', 'Deployments'],
  ['2023-01-30', 5],
  ['2023-02-06', 3],
  ['2023-02-13', 4],
  ['2023-02-20', 3],
  ['2023-02-27', 4],
];

export const changefail = [
  ['Outcome', 'Volume'],
  ['Passed', 24],
  ['Failed', 8],
];

export const getDeploymentFrequency = () => {
  const avg = freq.reduce((a, b) => a + b) / freq.length;
  return avg;
};

export const getDFPerformance = () => {
  const average = getDeploymentFrequency();
  if (average < 3) {
    return 'Low';
  } else if (average > 3 && average < 7) {
    return 'Medium';
  } else if (average > 7 && average < 10) {
    return 'High';
  }
  return 'Elite';
};

export const getChangeFail = () => {
  const ttlDeployments = passed + failed;
  const rate = failed / ttlDeployments;
  return rate;
};

export const getCFRPerformance = () => {
  const rate = getChangeFail();
  if (rate > 0.45) {
    return 'Low';
  } else if (rate < 0.45 && rate > 0.15) {
    return 'Medium - High';
  } else if (rate < 0.15) {
    return 'Elite';
  }
  return 'Error';
};
